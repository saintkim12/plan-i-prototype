import { cond } from 'lodash/fp'
import LogoDark from '/src/assets/logo-dark.png'
import TitleDark from '/src/assets/logo-dark.png'
import LogoLight from '/src/assets/logo-light.png'
import TitleLight from '/src/assets/title-light.png'

interface ComponentProps {
  className?: string
  theme?: 'light' | 'dark'
}

export default function TitleLogo({ className, ...props }: ComponentProps) {
  const $theme = props.theme ?? 'light'
  const [LogoImg, TitleImg] = cond<ComponentProps['theme'], [string, string]>([
    [theme => theme === 'dark', () => [LogoDark, TitleDark]],
    [theme => theme === 'light', () => [LogoLight, TitleLight]],
    [() => true, () => [LogoLight, TitleLight]],
  ])($theme)
  return (
    <div className={`${className}`}>
      <img src={LogoImg} />
      <img src={TitleImg} />
    </div>
  )
}