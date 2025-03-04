Feature: Login Calidda

Scenario Outline: Login Exitoso

Given Un usuario ingresa a la web Calidda
When El usuario ingresa las credenciales '<username>' y '<password>'
Then El usuario visualiza el esatado de la plataforma
And El usuario carga base de productos SKUs

Examples: 
| username | password | 
| super | ABC@abc2025 |