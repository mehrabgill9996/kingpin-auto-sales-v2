import { defineArrayMember, defineField, defineType } from 'sanity'

export const car = defineType({
  name: 'car',
  title: 'Car',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
      validation: (Rule) => Rule.required().positive(),
    }),
    defineField({
      name: 'make',
      title: 'Make',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'model',
      title: 'Model',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'year',
      title: 'Year',
      type: 'number',
      validation: (Rule) =>
        Rule.required().integer().min(1900).max(new Date().getFullYear() + 1),
    }),
    defineField({
      name: 'mileage',
      title: 'Mileage (km)',
      type: 'number',
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: 'fuelType',
      title: 'Fuel Type',
      type: 'string',
      options: {
        list: [
          { title: 'Gasoline', value: 'Gasoline' },
          { title: 'Diesel', value: 'Diesel' },
          { title: 'Hybrid', value: 'Hybrid' },
          { title: 'Electric', value: 'Electric' },
        ],
        layout: 'dropdown',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 5,
      description: 'A short write-up about this vehicle shown on its detail page.',
      validation: (Rule) => Rule.required().min(20).max(1000),
    }),
    defineField({
      name: 'transmission',
      title: 'Transmission',
      type: 'string',
      options: {
        list: [
          { title: 'Automatic', value: 'Automatic' },
          { title: 'Manual', value: 'Manual' },
        ],
        layout: 'dropdown',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Available', value: 'Available' },
          { title: 'Pending', value: 'Pending' },
          { title: 'Sold', value: 'Sold' },
        ],
        layout: 'dropdown',
      },
      initialValue: 'Available',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'imageGallery',
      title: 'Image Gallery',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'image',
          options: {
            hotspot: true,
          },
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      make: 'make',
      model: 'model',
      year: 'year',
      status: 'status',
      media: 'coverImage',
    },
    prepare({ title, make, model, year, status, media }) {
      return {
        title: title || [year, make, model].filter(Boolean).join(' '),
        subtitle: [year, make, model, status].filter(Boolean).join(' · '),
        media,
      }
    },
  },
})
