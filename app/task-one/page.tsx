/* eslint-disable react/no-unescaped-entities */
'use client'
import { useState } from 'react'
import { Card } from '@nextui-org/card'
import { Button } from '@nextui-org/button'

import { content, title } from '@/components/tasks'
import { InfoIcon } from '@/components/icons'
import { Tooltip } from '@nextui-org/tooltip'

export default function TaskOnePage() {
  const [isEditable, setIsEditable] = useState(false)
  const [isResize, setIsResize] = useState<boolean>(false)

  const toggleEdit = () => setIsEditable(!isEditable)
  const toggleResize = () => setIsResize(!isResize)

  return (
    <div>
      <Tooltip
        content={
          <ul>
            <li>
              1. Outer frame: Width 400px, no height limit, with border "1px
              solid red".
            </li>
            <li>
              2. Inner element: 2 buttons, 1 text field, you can arrange them as
              you like.
            </li>
            <li>
              2-1. Text field: Non-editable as normal, just like "p" or any
              block element, and can be edited after clicking button 1.
            </li>
            <li>
              2-2. Button 1: With the text "edit", when the user clicks it, text
              field will toggle between non-editable and editable modes.
            </li>
            <li>
              2-3. Button 2: With the text "resize", when the user clicks it,
              outer frame will toggle between 400px and 800px.
            </li>
            <li>
              Expect: The buttons' size should be fixed, and the text field
              should automatically resize when the outer frame or inner text
              changes.
            </li>
          </ul>
        }
      >
        <h1 className={title()}>
          Task One
          <InfoIcon width="15px" />
        </h1>
      </Tooltip>

      <Card className={content({ size: isResize ? '800' : '400' })}>
        <input
          className="row-span-2 w-full h-full rounded-none p-2"
          disabled={!isEditable}
          height={'100%'}
          placeholder={`is ${isEditable ? 'editable' : 'uneditable'}`}
          type="text"
        />
        <Button className="w-[80%]" color="primary" onClick={toggleEdit}>
          Edit
        </Button>
        <Button className="w-[80%]" color="primary" onClick={toggleResize}>
          Resize
        </Button>
      </Card>
    </div>
  )
}
