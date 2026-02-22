import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Insights_Test',

  projectId: 'dtz842y6',
  dataset: 'insights',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
