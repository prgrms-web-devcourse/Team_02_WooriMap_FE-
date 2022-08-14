import { FunctionComponent, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useComponentDidMount, useRecoilValueAfterMount } from 'hooks';
import userState from 'core';

function withNotCoupleRoute<P>(Component: FunctionComponent<P>) {
  return function WithCoupleComponent(props: P) {
    const mounted = useComponentDidMount();
    const user = useRecoilValueAfterMount(userState, null);
    const router = useRouter();

    useEffect(() => {
      if (!mounted) return;

      if (!user) {
        router.push('/auth/signin');
        return;
      }

      if (user.isCouple) {
        router.push('/profile');
      }
    }, [mounted, router, user]);

    if (!(mounted && user)) return null;

    return <Component {...props} />;
  };
}

export default withNotCoupleRoute;
