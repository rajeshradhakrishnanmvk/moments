FROM mcr.microsoft.com/dotnet/core/aspnet:3.1 AS base
WORKDIR /app
EXPOSE 80

FROM mcr.microsoft.com/dotnet/core/sdk:3.1 AS build
WORKDIR /src
COPY ["moments.gateway.csproj", "./"]
RUN dotnet restore "moments.gateway.csproj"
COPY . ./
RUN dotnet build "moments.gateway.csproj" -c Release -o /app

FROM build AS publish
RUN dotnet publish "moments.gateway.csproj" -c Release -o /app

FROM base AS final
WORKDIR /app
COPY --from=publish /app .
ENTRYPOINT ["dotnet", "moments.gateway.dll"]