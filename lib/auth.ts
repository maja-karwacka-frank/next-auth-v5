import { auth } from '@/auth';

// on server side
export const currentUser = async () => {
	const session = await auth();

	return session?.user;
};
