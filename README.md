# MCP Domótica Server

Este proyecto es una solución integral de domótica que implementa tecnologías de Inteligencia Artificial (Copilot), el protocolo Model Context Protocol (MCP), desarrollado por Anthropic y de código abierto, y el control de dispositivos IoT (Internet of Things) mediante Blynk Cloud. Permite la gestión inteligente y remota de dispositivos del hogar a través de comandos naturales y herramientas automatizadas.

![Imagen](https://github.com/mschvap/McpServer-Domotica/blob/main/imagen/infraestructura.png)


## Demo

A continuación se muestra una demo en video del servidor en funcionamiento:

![Imagen](https://github.com/mschvap/McpServer-Domotica/blob/main/imagen/WCTxxY4E8t.png)

https://github.com/mschvap/McpServer-Domotica/blob/main/video/2025-06-28%2018-00-22.mkv

Si ves este README en GitHub, el video se puede descargar o visualizar desde el enlace anterior.

## Requisitos

- Node.js 18 o superior
- GitHub Copilot
- Token de API de Blynk Cloud (opcional, si se desea personalizar)

## Instalación

1. Clona este repositorio o descarga los archivos en tu máquina local.
2. Instala las dependencias ejecutando:

   ```sh
   npm install
   ```

## Ejecución

Puedes iniciar el servidor usando el siguiente comando:

```sh
npx -y tsx main.ts
```

O bien, si tienes configurado un entorno MCP compatible, puedes usar la configuración incluida en `.vscode/settings.json` para lanzar el servidor desde VS Code.

## Configuración recomendada (`settings.json`)

Para facilitar la ejecución y depuración del servidor desde Visual Studio Code, puedes agregar la siguiente configuración en tu archivo `.vscode/settings.json` o en la configuración global de VS Code:

```jsonc
{
    "mcp": {
        "servers": {
            "Domotica": {
                "command": "npx",
                "args": [
                    "-y",
                    "tsx",
                    "{PATH_COMPLETO}/main.ts"
                ],
                "env": {}
            }
        }
    }
}
```

Esto permite lanzar el servidor directamente desde la interfaz de MCP en VS Code.

## Funcionalidades

El servidor expone las siguientes herramientas:

- **enciende-luz**: Enciende la luz de la habitación.
- **apaga-luz**: Apaga la luz de la habitación.
- **abre-puerta**: Abre la puerta de entrada de la casa.
- **cierra-puerta**: Cierra la puerta de entrada de la casa.

## Personalización

Si deseas utilizar tu propio token de Blynk Cloud, edita el archivo `main.ts` y reemplaza el valor del parámetro `token` en las URLs de las herramientas.

## Notas

- El servidor utiliza el transporte estándar de entrada/salida (stdio) para la comunicación MCP.
- Puedes modificar o agregar nuevas herramientas siguiendo el patrón de `registerTool` en `main.ts`.

## Referencias

Este proyecto tomó como referencia y guía el repositorio oficial del SDK de Model Context Protocol para TypeScript:

- https://github.com/modelcontextprotocol/typescript-sdk


