import { ReactComponent as CompanyIcon } from 'assets/icon-company.svg';
import { ReactComponent as LocationIcon } from 'assets/icon-location.svg';
import { ReactComponent as BlogIcon } from 'assets/icon-website.svg';

import { LocalGitHubUser } from 'types';
import styles from './UserInfo.module.scss';
import { InfoItem, InfoItemProps } from 'components/InfoItem';

interface UserInfoProps extends Pick<
  LocalGitHubUser,
  'blog' | 'company' | 'location'
  > { }

export const UserInfo = ({ blog, company, location }: UserInfoProps) => {
  const items: InfoItemProps[] = [
    {
      icon: <LocationIcon />,
      text: location,
    },
    {
      icon: <BlogIcon />,
      text: blog,
      isLink: true,
    },
    {
      icon: <CompanyIcon />,
      text: company,
    },
  ]

  return (
  <div className={styles.userInfo} >
      {items.map((item, index) => (
        <InfoItem {...item} key={index} />
    ))}
  </div>
  );
}
