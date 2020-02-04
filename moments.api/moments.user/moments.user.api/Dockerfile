FROM mcr.microsoft.com/dotnet/core/runtime:3.1 AS base
WORKDIR /app
EXPOSE 80

FROM mcr.microsoft.com/dotnet/core/sdk:3.1 AS build
WORKDIR /src
COPY ["moments.user.api.csproj", "./"]
RUN dotnet restore "moments.user.api.csproj"
COPY . ./
RUN dotnet build "moments.user.api.csproj" -c Release -o /app

FROM build AS publish
RUN dotnet publish "moments.user.api.csproj" -c Release -o /app

FROM base AS final
WORKDIR /app
COPY --from=publish /app .
ENTRYPOINT ["dotnet", "moments.user.api.dll"]