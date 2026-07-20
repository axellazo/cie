"use client";

import { motion, useReducedMotion, useScroll } from "motion/react";
import Image from "next/image";
import type { ReactNode } from "react";

const operatingSystem = [
  ["Problema", "Levanto requerimientos y separo síntomas de causas raíz con Lean, los 5 porqués y Pareto."],
  ["Modelado", "Evito el efecto GIGO al ordenar datos y diseñar una solución mantenible, escalable y ajustada al contexto."],
  ["Análisis", "Comparo escenarios, sensibilidad y alternativas, reconociendo cuándo aparecen rendimientos decrecientes."],
  ["Decisión", "Combino estadística y conocimiento del negocio para explicar correlaciones y convertir hallazgos en acciones claras."],
] as const;

const decisions = [
  {
    organization: "ORYGEN",
    signal: "BI / Inteligencia para decisiones",
    title: "Una única fuente de verdad para decisiones de personas",
    metric: "50 hh+",
    metricLabel: "ahorradas",
    sequence: [
      ["Contexto", "La información fragmentada exigía consolidaciones manuales y retrasaba el análisis de dotación y centros de costo."],
      ["Análisis y modelado", "Se evaluaron Power Automate, Python, Office Scripts y prompts con IA según mantenibilidad, escalabilidad, frecuencia de ejecución, dependencia del usuario y costo de largo plazo; cada opción se aplicó donde aportaba mayor valor."],
      ["Resultado", "Una base analítica gobernada y automatizaciones focalizadas redujeron el trabajo manual y mejoraron la consistencia de los reportes."],
    ],
    tools: "Power BI · DAX · Power Query · Python · Power Platform",
  },
  {
    organization: "REYCH",
    signal: "Optimización del negocio",
    title: "Un sistema operativo conectado para el abastecimiento en construcción",
    metric: "S/ 40k",
    metricLabel: "ahorrados",
    sequence: [
      ["Contexto", "Compras, logística y almacenes operaban con baja trazabilidad y visibilidad limitada de costos."],
      ["Análisis y modelado", "SharePoint se eligió frente a Dataverse por costo y licenciamiento, y frente a ERP S10 por la flexibilidad necesaria para adaptar el flujo al proceso real."],
      ["Resultado", "El flujo conectó solicitudes, aprobaciones e inventario, dando al equipo control del gasto y una base consistente para priorizar ahorros."],
    ],
    tools: "Power BI · SharePoint · Power Platform · SQL · Lean Construction",
  },
  {
    organization: "PUCP",
    signal: "Operaciones de datos",
    title: "Un ciclo de reportería reconstruido para operar a escala",
    metric: "500K+",
    metricLabel: "registros consolidados",
    sequence: [
      ["Contexto", "Cada ciclo dependía de consolidaciones manuales sobre conjuntos de datos grandes y cambiantes."],
      ["Análisis y modelado", "El proceso separó la validación de fuentes, la transformación y la lógica de salida en un flujo repetible."],
      ["Resultado", "La actualización quedó por debajo de cinco minutos por ciclo y permitió intervenir antes cuando la respuesta se alejaba de la meta."],
    ],
    tools: "Python · Transformación de datos · Automatización de reportes",
  },
] as const;

const questions = [
  "¿Qué decisión resulta difícil de tomar hoy?",
  "¿Qué relación produce el resultado?",
  "¿Dónde pierde integridad la información?",
  "¿Qué debe permanecer bajo criterio humano?",
  "¿Qué se vuelve posible cuando disminuye la incertidumbre?",
] as const;

const originImages = [
  {
    id: "industrial-engineering",
    bw: "/images/origin/graduation_bw.png",
    hover: "/images/origin/graduation_hover.png",
    title: "Ingeniería Industrial",
    subtitle: "Pensamiento sistémico",
    alt: "Graduación en Ingeniería Industrial",
  },
  {
    id: "motorsport",
    bw: "/images/origin/motorsport_bw.jpg",
    hover: "/images/origin/motorsport_hover.jpg",
    title: "Deporte motor",
    subtitle: "Precisión bajo presión",
    alt: "Automóvil de deporte motor en competencia",
  },
  {
    id: "basketball",
    bw: "/images/origin/basketball_bw.jpg",
    hover: "/images/origin/basketball_hover.jpg",
    title: "Baloncesto",
    subtitle: "Competir para mejorar",
    alt: "Partido de baloncesto en competencia",
  },
  {
    id: "certifications",
    bw: "/images/origin/microsoft_bw.png",
    hover: "/images/origin/microsoft_hover.png",
    title: "Certificaciones",
    subtitle: "Aprendizaje continuo",
    alt: "Certificaciones profesionales de Microsoft",
  },
] as const;

function Reveal({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 28 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.22 }}
      transition={{ duration: 0.82, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

function SceneMarker({ number, title }: { number: string; title: string }) {
  return (
    <div className="scene-marker">
      <span>{number}</span>
      <span>{title}</span>
    </div>
  );
}

function ProcessConnector() {
  return (
    <svg className="process-connector" viewBox="0 0 100 16" preserveAspectRatio="none" aria-hidden="true" focusable="false">
      <line x1="0" y1="8" x2="91" y2="8" />
      <path d="M 89 2 L 98 8 L 89 14" />
    </svg>
  );
}

export function CieExperience() {
  const { scrollYProgress } = useScroll();
  return (
    <main>
      <motion.div className="progress-line" style={{ scaleX: scrollYProgress }} aria-hidden="true" />
      <aside className="scene-rail" aria-label="Navegación por capítulos">
        <a href="#arrival" aria-label="Ir al inicio">00</a><a href="#shift" aria-label="Ir a El cambio">01</a><a href="#system" aria-label="Ir a Sistema operativo">02</a><a href="#decisions" aria-label="Ir a Proyectos implementados">03</a><a href="#thinking-room" aria-label="Ir a La sala de pensamiento">04</a><a href="#origin" aria-label="Ir a El Origen">05</a><a href="#contact" aria-label="Ir a La invitación">06</a>
      </aside>

      <section className="scene hero" id="arrival">
        <div className="frame hero-frame">
          <Reveal className="hero-copy">
            <p className="eyebrow">Axel Lazo / Lima, Perú</p>
            <h1><span className="hero-title-line">Transformo problemas</span>{" "}<span className="hero-title-line">complejos de negocio en</span>{" "}<span className="hero-title-line">decisiones confiables.</span></h1>
            <p className="domains">Negocio <span>•</span> Datos <span>•</span> Transformación Digital <span>•</span> IA</p>
          </Reveal>
          <div className="hero-meta">
            <span>Ingeniero Industrial, Pontificia Universidad Católica del Perú</span>
          </div>
          <a className="scroll-cue" href="#shift"><span>Entrar al sistema</span><span>↓</span></a>
        </div>
      </section>

      <section className="scene scene-breath" id="shift">
        <div className="frame">
          <SceneMarker number="01" title="El cambio" />
          <Reveal className="statement-wrap"><h2 className="statement">Toda decisión comienza antes del dashboard.</h2></Reveal>
          <Reveal className="counterpoint" delay={0.08}>
            <p>Los dashboards no crean claridad.</p><p>Revelan si el sistema que los sostiene merece confianza.</p>
          </Reveal>
          <Reveal className="process-flow" delay={0.12}>
            <div className="process-event" aria-label="Inicio: realidad del negocio"><span>Realidad del negocio</span></div>
            <ProcessConnector />
            <div className="process-task"><span>Entender el proceso</span></div>
            <ProcessConnector />
            <div className="process-task"><span>Estructurar información</span></div>
            <ProcessConnector />
            <div className="process-gateway" aria-label="Compuerta: evidencia suficiente"><span>¿Evidencia suficiente?</span></div>
            <ProcessConnector />
            <div className="process-event process-event-final" aria-label="Fin: decisión"><span>Decisión</span></div>
          </Reveal>
        </div>
      </section>

      <section className="scene scene-grid" id="system">
        <div className="frame wide-frame">
          <SceneMarker number="02" title="Sistema operativo" />
          <Reveal><p className="eyebrow">Una forma repetible de abordar la complejidad</p><h2 className="section-title">El problema se modela. El modelo se analiza. El análisis habilita la decisión.</h2></Reveal>
          <div className="system-grid">
            {operatingSystem.map(([title, copy], index) => (
              <Reveal className="system-step" delay={index * .07} key={title}>
                <span className="step-index">0{index + 1}</span><h3>{title}</h3><p>{copy}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="scene decisions-scene" id="decisions">
        <div className="frame wide-frame">
          <SceneMarker number="03" title="Decisiones diseñadas" />
          <Reveal><h2 className="section-title narrow">Proyectos implementados</h2></Reveal>
          <div className="decisions-stack">
            {decisions.map((decision) => (
              <article className="decision" key={decision.organization}>
                <header className="decision-intro">
                  <div className="project-title-block">
                    <div className="decision-id"><h3>{decision.organization}</h3><span>{decision.signal}</span></div>
                    <h3 className="project-title">{decision.title}</h3>
                  </div>
                  <Reveal className="metric project-kpi"><strong>{decision.metric}</strong><span>{decision.metricLabel}</span></Reveal>
                </header>
                <div className="decision-sequence">
                  {decision.sequence.map(([label, copy], index) => (
                    <Reveal className="sequence-step" delay={index * .055} key={label}>
                      <span>0{index + 1}</span><h4>{label}</h4><p>{copy}</p>
                    </Reveal>
                  ))}
                </div>
                <Reveal className="tools-line"><p>{decision.tools}</p></Reveal>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="scene scene-dark thinking-room" id="thinking-room">
        <div className="frame wide-frame">
          <SceneMarker number="04" title="La sala de pensamiento" />
          <Reveal><p className="eyebrow">Antes de las soluciones</p><h2 className="section-title">La calidad de la respuesta está limitada por la calidad de la pregunta.</h2></Reveal>
          <div className="thinking-stage">
            <Reveal className="question-ledger">
              {questions.map((question, index) => <p key={question}><span>0{index + 1}</span>{question}</p>)}
            </Reveal>
            <Reveal className="thinking-core" delay={.12}>
              <span>Modelo de trabajo</span><strong>Problema</strong><i>↓</i><strong>Modelado</strong><i>↓</i><strong>Análisis</strong><i>↓</i><strong>Decisión</strong>
            </Reveal>
          </div>
          <Reveal className="thinking-conclusion"><p>La mayoría de organizaciones no tiene múltiples problemas.</p><p>Tiene un sistema expresándose en distintos lugares.</p></Reveal>
        </div>
      </section>

      <section className="scene origin-scene" id="origin">
        <div className="frame wide-frame">
          <SceneMarker number="05" title="El Origen" />
          <Reveal><p className="eyebrow">Cuatro entornos, una misma fascinación.</p><h2 className="section-title">Los sistemas se revelan a través de la estructura, el ritmo y las restricciones.</h2></Reveal>
          <div className="origin-grid">
            {originImages.map((item) => (
              <figure className="origin-item" tabIndex={0} key={item.id}>
                <Image className="origin-image origin-image-bw" src={item.bw} alt={item.alt} fill sizes="(max-width: 600px) calc(100vw - 2.5rem), (max-width: 1400px) calc(50vw - 5rem), 640px" priority={false} loading="lazy" />
                <Image className="origin-image origin-image-hover" src={item.hover} alt="" aria-hidden="true" fill sizes="(max-width: 600px) calc(100vw - 2.5rem), (max-width: 1400px) calc(50vw - 5rem), 640px" priority={false} loading="lazy" />
                <figcaption className="origin-caption"><h3>{item.title}</h3><p>{item.subtitle}</p></figcaption>
              </figure>
            ))}
          </div>
          <Reveal className="origin-quote"><blockquote>No disfruto los sistemas complejos por ser complejos. Disfruto el momento en que se vuelven comprensibles.</blockquote></Reveal>
        </div>
      </section>

      <section className="scene invitation" id="contact">
        <div className="frame contact-frame">
          <SceneMarker number="06" title="La invitación" />
          <Reveal><h2 className="statement">La siguiente decisión importante comenzará como incertidumbre.</h2><p className="invitation-line">Ahí comienza mi trabajo.</p></Reveal>
          <Reveal className="contact-actions" delay={.1}>
            <a href="mailto:axel.lazo@pucp.edu.pe?subject=Conversemos%20sobre%20una%20oportunidad">axel.lazo@pucp.edu.pe <span>↗</span></a>
            <a href="https://www.linkedin.com/in/axel-lazo/" target="_blank" rel="noreferrer">LinkedIn <span>↗</span></a>
            <a href="/cv.pdf" target="_blank" rel="noreferrer">CV <span>↓</span></a>
          </Reveal>
          <footer><div><strong>© 2026 Axel Lazo</strong></div><p>Confidence is engineered.</p></footer>
        </div>
      </section>
    </main>
  );
}
