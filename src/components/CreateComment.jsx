import { Avatar, Button, Textarea } from '@nextui-org/react';
import React, { useState } from 'react'
import { getErrorsField } from '../utils/utils';
import { useDispatch, useSelector } from 'react-redux';
import { createComment } from '../redux/api/comment';

const CreateComment = ({postId}) => {
    const [content,setContent] = useState('')
    const dispatch = useDispatch()
    const {loading , errorValidation} = useSelector(state=>state.comment)
   const handelSubmit = e=>{
    e.preventDefault()
    dispatch(createComment(postId,{content},()=>setContent('')))
   }
  return (
    <form
      className="w-full flex flex-col items-center gap-3 bg-transparent p-3  dark:text-white border-b-1 border-gray-400"
      onSubmit={handelSubmit}
    >
      <div className="w-full flex items-start gap-2">
        <Avatar className="flex-shrink-0" size="sm" />
        <Textarea
          placeholder="Write Somthing Her ..."
          onChange={(e) => {
            setContent(e.target.value);
            // dispatch(postActions.setErrorValidation(null));
          }}
          value={content}
          color={
            getErrorsField(errorValidation, "description")
              ? "danger"
              : "default"
          }
          isInvalid={getErrorsField(errorValidation, "description")}
          errorMessage={
            getErrorsField(errorValidation, "description") && (
              <ul>
                {getErrorsField(errorValidation, "description")?.map((e, i) => (
                  <li key={i}>{e}</li>
                ))}
              </ul>
            )
          }
        />
      </div>
      <div className='flex justify-end w-full'>
      <Button color="success" type="submit" size='sm' isLoading={loading.create} >
          Comment
        </Button>
      </div>
      </form>
  )
}

export default CreateComment