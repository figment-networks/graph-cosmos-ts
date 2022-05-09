# graph-cosmos-ts

This modules contains the TypeScript/AssemblyScript binding for osmosis protobuf

## Development

Install protoc: `https://github.com/protocolbuffers/protobuf/releases`

### Get proto-file

```bash
./submodule-init.sh
git submodule update --force
```

### Build and test

```bash
yarn build
yarn test
```

## Update dependencies

Update branch variable in .gitmodules to point to the new tag.

> **Submodule should always point to tag**

```bash
git -C <submodule_dir> checkout <new_tag>
yarn build
yarn test
git commit -m <submodule_dir>
```
