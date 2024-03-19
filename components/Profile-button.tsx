import Link from 'next/link';
import React from 'react';
import { Button } from './ui/button';

type Props = {}

const ProfileButton = (props: Props) => {

  return (
    <Link href="/login">
      <Button>
        Login
      </Button>
    </Link>
  )
}

export default ProfileButton