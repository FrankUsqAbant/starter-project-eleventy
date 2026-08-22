---
layout: layout-post.njk
title: Clean Code — Robert C. Martin
description: Principios fundamentales, patrones y buenas prácticas para escribir código legible, mantenible y profesional.
tags: ["blog", "libros"]
date: "2024-03-15"
---

Escribir código que una máquina entienda es fácil; escribir código que cualquier desarrollador pueda comprender y mantener en el tiempo es un arte. *Clean Code* de Robert C. Martin ("Uncle Bob") es una lectura obligatoria para desarrolladores de cualquier nivel.

## 🧼 Reglas Esenciales de Código Limpio

- **Nombres con propósito:** El nombre de una variable, función o clase debe responder por qué existe, qué hace y cómo se usa sin necesidad de comentarios explicativos.
- **Funciones pequeñas y de una sola responsabilidad:** Las funciones deben hacer una sola cosa y hacerla excepcionalmente bien (Principio de Responsabilidad Única).
- **La regla del Boy Scout:** Deja siempre el archivo de código un poco más limpio y ordenado de como lo encontraste.

```javascript
// Ejemplo: Claridad sobre concisión críptica
function calculateTotalWithTaxes(subtotal, taxRate) {
  const taxAmount = subtotal * taxRate;
  return subtotal + taxAmount;
}
```

### Reflexión Final
Un código limpio no es un lujo estético, es una inversión en la productividad y la tranquilidad de todo el equipo de desarrollo.
