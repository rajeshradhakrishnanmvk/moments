FROM microsoft/dotnet:2.1-aspnetcore-runtime AS base
WORKDIR /app
EXPOSE 80

FROM microsoft/dotnet:2.1-sdk AS build
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