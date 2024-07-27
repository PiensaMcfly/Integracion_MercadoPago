 Integración de Checkout de Mercado Pago

Este proyecto es una aplicación sencilla que integra el checkout de Mercado Pago en una página web, utilizando Node.js en el backend y JavaScript en el frontend. Permite a los usuarios realizar pagos a través de Mercado Pago de manera segura y eficiente.

## Características

- **Integración con Mercado Pago:** Utiliza la API de Mercado Pago para crear preferencias de pago y generar botones de checkout.
- **Backend con Node.js:** Un servidor backend que maneja la creación de preferencias de pago.
- **Frontend con HTML y JavaScript:** Una interfaz de usuario simple para interactuar con el servicio de pago.
- **Configuración de CORS:** Permite solicitudes desde diferentes orígenes.

## Requisitos

- Node.js (v14 o superior)
- Una cuenta de Mercado Pago con credenciales de prueba

## Instalación

1. **Clona el repositorio:**

    ```bash
    git clone https://github.com/tu-usuario/tu-repositorio.git
    cd tu-repositorio
    ```

2. **Instala las dependencias del backend:**

    ```bash
    npm install
    ```

3. **Configura las credenciales de Mercado Pago:**

    En el archivo `index.js`, reemplaza `'ACCES TOKEN '` con tu token de acceso de prueba de Mercado Pago.
   
    En el archivo `app.js`, reemplaza `'KEY  '` con tu KEY de acceso de prueba de Mercado Pago.

5. **Inicia el servidor:**

    ```bash
    npm start
   o node index.js
    ```

6. **Abre el archivo HTML en tu navegador:**

    Abre el archivo `index.html` en tu navegador para probar la integración.

## Uso

- Haz clic en el botón "Checkout" para iniciar el proceso de pago.
- Ingresa los datos requeridos y sigue las instrucciones para completar el pago.

## Estructura del Proyecto

- **index.js:** Configuración y manejo del servidor Node.js.
- **index.html:** Archivo HTML que contiene el botón de checkout y los scripts necesarios.
- **styles.css:** Estilos para la página web.

