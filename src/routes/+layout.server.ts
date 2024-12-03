export const load = async ({
	locals: { getSession }
}: {
	locals: { getSession: () => Promise<any> };
}) => {
	return {
		session: await getSession()
	};
};
