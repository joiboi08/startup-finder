import { defineField, defineType } from "sanity";

export const author = defineType({
    name: "author",
    title: "Author",
    type: "document",
    icon: () => "👩‍💻",

    fields: [defineField({
        name: 'id',
        type: 'number'
    }),
    defineField({
        name: 'name',
        type: 'string'
    }), 
    defineField({
        name: 'username',
        type: 'string'
    }), 
    defineField({
        name: 'email',
        type: 'string'
    }), 
    defineField({
        name: 'image',
        type: 'url'
    }), 
    defineField({
        name: 'bio',
        type: 'string'
    })], 

preview: {
    select: {
        title: 'name'
    }
}
})

// allows us to select the author by name and preview them
// npm install sanity-plugin-markdown