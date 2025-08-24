import { defineField, defineType } from "sanity";

export const startup = defineType({
    name: "startup",
    title: "Startup",
    type: "document",

    fields: [
        defineField({
            name: 'author',
            type: 'reference',
            to: { type: 'author' } // reference the author schema
        }),
        defineField({
            name: 'title',
            type: 'string'
        }),
        defineField({
            name: 'slug',
            type: 'slug',
            options: {
                source: 'title'
            }
        }), 
        defineField({
            name: 'views',
            type: 'number'
        }), 
        defineField({
            name: 'description',
            type: 'text'
        }), 
        defineField({
            name: 'category',
            type: 'string', // ideally an enum with predefined categories
            validation: (Rule) => Rule.min(1).max(20).required().error('Please enter a category')
        }),
    defineField({
        name: 'image',
        type: 'url',
        validation: (Rule) => Rule.required().error('Please enter add an image URL')
    }),
    defineField({
            name: 'pitch',
            type: 'markdown'
        })]
})

// no preview needed here as we won't be selecting startups by name