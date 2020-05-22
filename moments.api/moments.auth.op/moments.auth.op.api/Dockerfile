FROM mcr.microsoft.com/dotnet/core/aspnet:3.1 AS base
WORKDIR /app
EXPOSE 80

FROM mcr.microsoft.com/dotnet/core/sdk:3.1 AS build
WORKDIR /src
COPY ["moments.auth.op.api.csproj", "./"]
RUN dotnet restore "moments.auth.op.api.csproj"
COPY . ./
RUN dotnet build "moments.auth.op.api.csproj" -c Release -o /app

FROM build AS publish
RUN dotnet publish "moments.auth.op.api.csproj" -c Release -o /app

FROM base AS final
WORKDIR /app
COPY --from=publish /app .
ENTRYPOINT ["dotnet", "moments.auth.op.api.dll"]