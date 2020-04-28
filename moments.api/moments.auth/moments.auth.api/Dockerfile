FROM mcr.microsoft.com/dotnet/core/aspnet:3.1 AS base
WORKDIR /app
EXPOSE 80

FROM mcr.microsoft.com/dotnet/core/sdk:3.1 AS build
WORKDIR /src
COPY ["moments.auth.api.csproj", "./"]
RUN dotnet restore "moments.auth.api.csproj"
COPY . ./
RUN dotnet build "moments.auth.api.csproj" -c Release -o /app

FROM build AS publish
RUN dotnet publish "moments.auth.api.csproj" -c Release -o /app

FROM base AS final
WORKDIR /app
COPY --from=publish /app .
ENTRYPOINT ["dotnet", "moments.auth.api.dll"]