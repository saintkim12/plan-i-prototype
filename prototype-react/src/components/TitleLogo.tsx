import { cond } from 'lodash/fp'
import LogoDark from '/src/assets/logo-dark.png'
import TitleDark from '/src/assets/logo-dark.png'
import LogoLight from '/src/assets/logo-light.png'
import TitleLight from '/src/assets/title-light.png'

interface ComponentProps {
  className?: string
  theme?: 'light' | 'dark'
}

const getLogoByTheme = ($theme: ComponentProps['theme']) => cond<ComponentProps['theme'], [string, string]>([
  [theme => theme === 'dark', () => [LogoDark, TitleDark]],
  [theme => theme === 'light', () => [LogoLight, TitleLight]],
  [() => true, () => [LogoLight, TitleLight]],
])($theme)

/**
 * @returns 타이틀 컴포넌트
 */
export function Title({ className, ...props }: ComponentProps) {
  const $theme = props.theme ?? 'light'
  const [, TitleImg] = getLogoByTheme($theme)
  return (
    <div className={`${className}`}>
    <img src={TitleImg} />
    </div>
  )
}
/**
 * @returns 로고 이미지 컴포넌트
 */
export function Logo({ className, ...props }: ComponentProps) {
  const $theme = props.theme ?? 'light'
  const [LogoImg] = getLogoByTheme($theme)
  return (
    <div className={`image ${className}`}>
      <img src={LogoImg} />
    </div>
  )
}

/**
 * @returns 로고 이미지 + 타이틀 컴포넌트
 */
export default function TitleLogo({ className, ...props }: ComponentProps) {
  const $theme = props.theme ?? 'light'
  const [LogoImg, TitleImg] = getLogoByTheme($theme)
  return (
    <div className={`${className}`}>
      <img src={LogoImg} />
      <img src={TitleImg} />
    </div>
  )
}