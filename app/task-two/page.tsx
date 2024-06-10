/* eslint-disable react/no-unescaped-entities */
'use client'
import { useState } from 'react'
import { Card } from '@nextui-org/card'
import { Button } from '@nextui-org/button'

import { title } from '@/components/tasks'
import { InfoIcon } from '@/components/icons'
import { Tooltip } from '@nextui-org/tooltip'

const INITIAL_DURATION = 0
export default function TaskTwoPage() {
  const [isStarted, setIsStarted] = useState(false)
  const [startTime, setStartTime] = useState(0)
  const [duration, setDuration] = useState(INITIAL_DURATION)

  const handleClickStart = () => {
    setIsStarted(true)
    setDuration(INITIAL_DURATION)
    setStartTime(Date.now())
  }

  const handleClickEnd = () => {
    if (isStarted && startTime) {
      const endTime = Date.now()
      const newDuration = Math.floor((endTime - startTime) / 1000)
      setDuration(newDuration)
      setIsStarted(false)
    }
  }

  const formattedDuration = `${duration} seconds`

  return (
    <div>
      <Tooltip
        content={
          <ul>
            <li>Now we have two buttons:</li>
            <li>
              <ul>
                <li>Button 1: With the text "start".</li>
                <li>Button 2: With the text "end".</li>
              </ul>
            </li>
            <li>
              Expect: Click button 1 first, wait a few seconds, and then click
              button 2. The browser should display the time duration between
              these two click.
            </li>
          </ul>
        }
      >
        <h1 className={title()}>
          Task One
          <InfoIcon width="15px" />
        </h1>
      </Tooltip>

      <Card className="grid grid-cols-2 gap-4 mt-2 justify-items-center border-none bg-transparent shadow-none">
        <Card className="col-span-2 w-full h-full rounded-none p-2 border-none bg-transparent shadow-none">
          {formattedDuration}
        </Card>
        <Button className="w-[80%]" color="primary" onClick={handleClickStart}>
          Start
        </Button>
        <Button className="w-[80%]" color="primary" onClick={handleClickEnd}>
          End
        </Button>
      </Card>
    </div>
  )
}
