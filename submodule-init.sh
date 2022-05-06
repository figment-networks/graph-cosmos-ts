#! /bin/bash

SUBMODULES=$(git config -f .gitmodules -l | awk -F"." '{ print $2 }' | uniq)

for SUBMODULE in ${SUBMODULES}; do
    SUBMODULE_PATH=$(git config -f .gitmodules --get submodule.${SUBMODULE}.path)
    SUBMODULE_URL=$(git config -f .gitmodules --get submodule.${SUBMODULE}.url)
    SUBMODULE_BRANCH=$(git config -f .gitmodules --get submodule.${SUBMODULE}.branch)
    SUBMODULE_DIR=($(git config -f .gitmodules --get submodule.${SUBMODULE}.dir))

    if [ ! -d ${SUBMODULE_PATH}/.git ]; then
        git clone --filter=blob:none --no-checkout --branch ${SUBMODULE_BRANCH} ${SUBMODULE_URL} ${SUBMODULE_PATH}
    fi

    git -C ${SUBMODULE_PATH} config core.sparseCheckout true
    git -C ${SUBMODULE_PATH} sparse-checkout set ${SUBMODULE_DIR[*]}
done