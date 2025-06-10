import React from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { cn } from '@/lib/utils';

interface companionListProps{
  title:string;
  companions?:Companion[];
  classNames?:string;
}


const CompanionList = ({title,companions,classNames}:companionListProps) => {
  return (
    <article className={cn('companion-list',classNames)}>
      <h2 className='font-bold text-3xl'>{title}</h2>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className='text-lg w-2/3'>Lessons</TableHead>
            <TableHead className='text-lg '>Subjects</TableHead>
            <TableHead className='text-lg text-right'>Duration</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          (companions?.map({id,subject,name,topic,duration})=>(
            
          ))
        </TableBody>
      </Table>

    </article>
  )
}

export default CompanionList
