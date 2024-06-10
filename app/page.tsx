import { Link } from '@nextui-org/link'
import { button as buttonStyles } from '@nextui-org/theme'

import { siteConfig } from '@/config/site'
import { title, typeWriter } from '@/components/primitives'
import { GithubIcon } from '@/components/icons'

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-lg text-center justify-center">
        <p>Hello!&nbsp;</p>
        <h1>
          I am <span className={typeWriter()}>Shueny Wang</span>
        </h1>
        <br />
        <h1 className={title()}>Make&nbsp;</h1>
        <h1 className={title()}>Website&nbsp;</h1>
        <br />
        <h1 className={title()}>
          by <span className={title({ color: 'violet' })}>Next UI</span>.
        </h1>
      </div>

      <div className="flex gap-3">
        <Link
          isExternal
          className={buttonStyles({ variant: 'bordered', radius: 'full' })}
          href={siteConfig.links.github}
        >
          <GithubIcon size={20} />
          GitHub
        </Link>
      </div>
    </section>
  )
}
