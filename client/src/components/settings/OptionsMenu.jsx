import React from 'react'
import OptionsList from './OptionsList'
import { LinkButtonOptionItem } from '../common/Links'
import LockIcon from '../../svgs/icons/optionsList/Lock.svg'
import SubscriptionIcon from '../../svgs/icons/optionsList/Subscription.svg'
import SocialsIcon from '../../svgs/icons/optionsList/Socials.svg'
import pagesPaths from '../../routes/PagesPaths'

const OptionsMenu = () => {
  return (
    <OptionsList>
        <LinkButtonOptionItem to={pagesPaths.settings.subscription}
                              icon={SubscriptionIcon}>
          Subscription
        </LinkButtonOptionItem>
        <LinkButtonOptionItem to={pagesPaths.settings.changePassword}
                              icon={LockIcon}>
          Change password
        </LinkButtonOptionItem>
        <LinkButtonOptionItem to={pagesPaths.settings.socials}
                              icon={SocialsIcon}>
          Socials
        </LinkButtonOptionItem>
    </OptionsList>
  )
}

export default OptionsMenu