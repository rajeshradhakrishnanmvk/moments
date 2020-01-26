`set -eu -o pipefail`
dotnet restore /code/moments-space.tests/moments-space.tests.csproj
dotnet build /code/moments-space.tests/moments-space.tests.csproj
dotnet test  /code/moments-space.tests/
