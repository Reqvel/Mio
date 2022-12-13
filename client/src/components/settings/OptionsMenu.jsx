import React from 'react'
import OptionsList from './OptionsList'
import { LinkButtonOptionItem } from '../common/Links'
import LightLockIcon from '../../svgs/light/icons/optionsList/Lock.svg'
import LightSubscriptionIcon from '../../svgs/light/icons/optionsList/Subscription.svg'
import LightSocialsIcon from '../../svgs/light/icons/optionsList/Socials.svg'
import LightPencilIcon from '../../svgs/light/icons/optionsList/Pencil.svg'
import DarkLockIcon from '../../svgs/dark/icons/optionsList/Lock.svg'
import DarkSubscriptionIcon from '../../svgs/dark/icons/optionsList/Subscription.svg'
import DarkSocialsIcon from '../../svgs/dark/icons/optionsList/Socials.svg'
import DarkPencilIcon from '../../svgs/dark/icons/optionsList/Pencil.svg'
import pagesPaths from '../../routes/PagesPaths'
import { useSelector } from 'react-redux';


const OptionsMenu = () => {
  const { isThemeDark } = useSelector(state => state.app)
  const { selectedOption } = useSelector(state => state.settings)

  return (
    <OptionsList>
        <LinkButtonOptionItem to={pagesPaths.settings.subscription}
                              selectedoption={selectedOption}
                              icon={ isThemeDark
                                      ? DarkSubscriptionIcon
                                      : LightSubscriptionIcon }>
          Subscription
        </LinkButtonOptionItem>
        <LinkButtonOptionItem to={pagesPaths.settings.changePassword}
                              selectedoption={selectedOption}
                              icon={ isThemeDark
                                      ? DarkLockIcon
                                      : LightLockIcon }>
          Change password
        </LinkButtonOptionItem>
        <LinkButtonOptionItem to={pagesPaths.settings.socials}
                              selectedoption={selectedOption}
                              icon={ isThemeDark
                                      ? DarkSocialsIcon
                                      : LightSocialsIcon }>
          Socials
        </LinkButtonOptionItem>
        <LinkButtonOptionItem to={pagesPaths.settings.appearance}
                              selectedoption={selectedOption}
                              icon={ isThemeDark
                                      ? DarkPencilIcon
                                      : LightPencilIcon }>
          Appearance
        </LinkButtonOptionItem>
    </OptionsList>
  )
}

export default OptionsMenu