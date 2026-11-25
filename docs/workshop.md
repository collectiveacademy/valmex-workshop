# Decidir con IA · Workshop ejecutivo Valmex

## Propósito

En 90 minutos, los directores practicarán cómo usar Copilot para investigar una decisión **interna** a partir de un CSV. La meta no es pedirle una respuesta a la IA: es dirigir una investigación breve, evaluar la calidad de la evidencia y decidir el siguiente paso con criterio.

La conversación se mantiene en procesos, operación, riesgo, eficiencia, calidad, talento o servicio interno. No se generan recomendaciones de inversión para clientes, instrucciones para operar cuentas, ni comunicaciones externas listas para enviar. Cualquier borrador destinado a clientes debe ser revisado y aprobado por una persona responsable antes de utilizarse.

## Resultado esperado

Cada equipo termina con una **Ficha de decisión** de una página:

- Un patrón observable, si los datos muestran uno claro.
- Una hipótesis principal y una alternativa.
- Evidencia a favor y en contra.
- Límites, datos faltantes y nivel de confianza.
- Un siguiente paso interno concreto, o una razón para escalar el caso.

## Antes de la sesión

### Material por equipo

- Copilot aprobado por Valmex.
- Un CSV interno de 20 a 500 filas, preparado por el área dueña del proceso.
- Contexto de negocio: qué representa cada columna, periodo, población y decisión pendiente.

### El CSV correcto

Elijan un caso con una decisión real que aún no esté tomada. Funcionan bien datos agregados de tiempos de ciclo, incidencias, niveles de servicio, calidad, carga operativa, capacitación, retrabajo, solicitudes internas o resultados de procesos.

Antes de cargarlo, retiren o anonimizen datos personales, identificadores de clientes, números de cuenta, posiciones, instrucciones de inversión, contraseñas y otra información restringida. Usen solamente la instancia y el flujo de carga autorizados por Valmex. Si hay duda sobre sensibilidad, no carguen el archivo: escalen con el responsable de datos, seguridad o cumplimiento.

### Caso de ejemplo seguro

> Queremos entender por qué aumentó el tiempo de atención de solicitudes internas durante el último trimestre, para priorizar una mejora operativa en los siguientes 30 días.

## Agenda · 90 minutos

| Tiempo | Momento | Resultado |
| :--- | :--- | :--- |
| 0–15 min | Preparar el caso | Un CSV seguro y una decisión interna concreta. |
| 15–40 min | Paso 1: Descubrir | Entender el archivo y elegir una pregunta que valga la pena responder. |
| 40–65 min | Paso 2: Profundizar | Usar esa misma pregunta para explorar posibles explicaciones e implicaciones. |
| 65–75 min | Validar antes de usar | Separar evidencia de interpretación, revisar errores y decidir si hay que escalar. |
| 75–90 min | Cierre ejecutivo | Una conclusión breve y el siguiente paso interno. |

## 1. Preparar el caso · 15 min

Formen equipos de 3 o 4. Antes de abrir Copilot, definan el terreno de decisión: qué proceso quieren entender y qué conversación interna podría orientar el análisis. No definan todavía un problema ni una causa; el primer paso con el CSV sirve precisamente para descubrir qué merece atención.

Usen esta guía sencilla:

- **Contexto:** ¿qué proceso, resultado o área cubre el CSV?
- **Pregunta abierta:** ¿qué podríamos descubrir en estos datos que merezca nuestra atención?
- **Decisión posible:** ¿qué priorización, conversación o siguiente paso interno podría orientar este análisis?

```text
Contexto: Este CSV contiene solicitudes internas del último trimestre.
Pregunta abierta: ¿Qué parte del proceso merece nuestra atención y por qué?
Decisión posible: Priorizar dónde revisar primero el proceso.
```

Eviten convertir una intuición en el punto de partida, por ejemplo: “el equipo X es la causa”.

## 2. Paso 1: Descubrir los datos · 25 min

El primer paso no busca una respuesta final. Copilot ayuda al equipo a entender el archivo, detectar señales y proponer preguntas. El equipo elige **una sola pregunta** que quiera profundizar en el siguiente paso.

### Prompt: mapa de oportunidades

Adjunta el CSV y pega este texto. Sustituye los corchetes.

```text
Actúa como analista ejecutivo de operaciones y riesgo.

<contexto>
Estamos revisando un proceso interno de Valmex.
El propósito de este análisis es apoyar esta decisión: [decisión interna].
El archivo cubre [periodo], y cada fila representa [unidad de análisis].
Las columnas significan: [explicación de columnas, unidades y reglas de negocio].
</contexto>

<tarea>
No des recomendaciones ni atribuyas causas todavía.
1. Explica en lenguaje ejecutivo qué contiene el archivo y qué calidad de datos podría afectar el análisis.
2. Si los datos muestran señales claras, presenta hasta 3 patrones, diferencias o cambios relevantes. Incluye el segmento, periodo o columna que los respalda. Si no hay una señal clara, dilo.
3. Propón hasta 5 preguntas que un director debería hacer antes de tomar una decisión.
4. Para cada pregunta, indica qué decisión interna podría orientar.
5. Distingue hechos del CSV, interpretaciones posibles y datos faltantes.
</tarea>

<reglas>
- No inventes datos ni causas.
- Si no puedes leer una parte del archivo, dilo.
- No generes recomendaciones de inversión ni contenido para clientes.
</reglas>
```

### Elegir la pregunta puente

Elijan una pregunta propuesta por Copilot y péguenla tal cual en el siguiente prompt. Debe ser una pregunta que pueda cambiar una decisión interna.

Si la pregunta nació de un patrón claro, registren también ese patrón y las columnas que lo sustentan. Si no aplica, continúen solo con la pregunta y el contexto de negocio.

**Salida del paso 1:** una pregunta prioritaria y, si aplica, un patrón observable.

## 3. Paso 2: Profundizar la pregunta elegida · 25 min

Este paso continúa la misma conversación de Copilot y usa el mismo CSV. El objetivo es mostrar la potencia de la IA para contrastar explicaciones, organizar evidencia y revelar qué tendría que validarse antes de actuar.

### Prompt: de pregunta a decisión

```text
Continúa con el mismo CSV y el análisis anterior.

La pregunta que elegimos es:
[Pega la pregunta prioritaria del paso 1]

Patrón que queremos entender (opcional; úsalo solo si surgió un patrón claro en el paso 1):
[Pega el patrón y las columnas que lo sustentan, o escribe “No aplica”]

<tarea>
1. Propón dos explicaciones plausibles de la pregunta o del patrón, si aplica: una principal y una alternativa.
2. Para cada una, muestra brevemente la evidencia del CSV que la apoya y lo que la contradice o deja sin responder.
3. Dinos qué interpretación sería atractiva, pero prematura.
4. Sugiere una acción interna de bajo riesgo que valga la pena explorar y la validación mínima necesaria antes de tomarla.
5. Resume el resultado para un comité ejecutivo en cinco viñetas: hallazgo, explicación más plausible, límite, implicación y siguiente paso.
</tarea>

<reglas>
- No confundas correlación con causalidad ni inventes datos.
- No produzcas recomendaciones de inversión, instrucciones de operación o mensajes para clientes.
</reglas>
```

## 4. Validar antes de usar · 10 min

Antes de convertir un análisis en acción, el equipo hace esta revisión. Si una respuesta de Copilot no supera estas preguntas, se corrige o se escala.

### Revisión de 4 preguntas

1. **¿De dónde sale?** Confirmen la cifra, el filtro o la fila en el CSV.
2. **¿Qué podría estar mal?** Revisen definiciones, faltantes, periodos y supuestos.
3. **¿Qué no sabemos aún?** Identifiquen el límite que podría cambiar la conclusión.
4. **¿Podemos usarlo aquí?** Si intervienen datos sensibles, una decisión regulada, inversión, clientes o comunicación externa, detengan el uso y escalen con el responsable correspondiente.

## 5. Cierre ejecutivo · 15 min

Cada equipo comparte su ficha en un minuto. El foco es la calidad de la decisión, no una presentación perfecta.

### Guía de llenado del equipo

**Proceso / área:** completen el nombre del proceso analizado.

**Decisión interna pendiente:** describan la decisión que este análisis debe orientar.

**Patrón observable (opcional):** indiquen qué encontraron en el CSV y cómo se puede verificar.

**Pregunta prioritaria:** escriban la pregunta elegida en el paso 1.

**Explicaciones consideradas:** anoten la explicación principal y la alternativa.

**Evidencia:** resuman la evidencia principal y su límite más relevante.

**Valida antes de usar:** indiquen qué deben verificar, qué información falta o quién debe confirmarla, y si requiere escalarse.

**Siguiente paso interno:** definan una prueba, validación o conversación concreta para los próximos 30 días.

