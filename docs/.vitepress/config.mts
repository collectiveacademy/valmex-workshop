import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Decidir con IA – Valmex',
  description: 'Workshop ejecutivo para investigar decisiones internas con Copilot',
  lang: 'es-ES',
  themeConfig: {
    siteTitle: 'Decidir con IA · Valmex',
    nav: [
      { text: 'Inicio', link: '/' },
    ],

    outline: {
      level: 2,
      label: 'En esta página'
    },

    socialLinks: [],

    footer: {
      message: 'Material de trabajo interno. Toda salida de IA requiere revisión humana.',
      copyright: 'Valmex · Decidir con IA'
    }
  }
})
