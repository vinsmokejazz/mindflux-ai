'use client'
import CompanionForm from '@/components/CompanionForm'
import React from 'react'
import { z } from "zod";

const formSchema = z.object({
  username: z.string().min(2).max(50),
})

const NewCompanion = () => {
  return (
    <main className='min-lg:w-1/3 minmd:w-2/3 items-center justify-center'>
      <article className='w-full gap-4 flex flex-col'>
        <h1>Companion Builder</h1>
        <CompanionForm />
      </article>
    </main> 
  )
}

export default NewCompanion