`set -eu -o pipefail`
dotnet restore /code/moments.auth.op.tests/moments.auth.op.tests.csproj
dotnet build /code/moments.auth.op.tests/moments.auth.op.tests.csproj
dotnet test  /code/moments.auth.op.tests/
