`set -eu -o pipefail`
dotnet restore /code/moments.category.tests/moments.category.tests.csproj
dotnet build /code/moments.category.tests/moments.category.tests.csproj
dotnet test  /code/moments.category.tests/
