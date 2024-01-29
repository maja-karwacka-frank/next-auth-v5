'use client';

import { logout } from '@/actions/logout';
import { useCurrentUser } from '@/hooks/use-current-user';
// import { useSession, signOut } from 'next-auth/react';

// import { auth, signOut } from '@/auth';

const SettingPage = () => {
	// const session = await auth(); // on server side with async page
	// const session = useSession(); // on client side
	const user = useCurrentUser();

	const onClick = () => {
		// signOut(); // on client side
		logout();
	};

	return (
		<>
			{/* <form
		action={async () => {
			'use server';
			await signOut();
		}}>
		<button type='submit'>Sign out</button>
	</form> */}

			<div className='bg-white p-10 rounded-xl'>
				<button type='submit' onClick={onClick}>
					Sign out
				</button>
			</div>
		</>
	);
};

export default SettingPage;
