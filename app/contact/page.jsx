import { FeedbackForm } from 'components/feedback-form';
import { Markdown } from '../../components/markdown';

export const metadata = {
    title: 'Contact'
};

const explainer = `
You can contact me via this feedback form. I'm the owner.
`;

export default async function Page() {
    return (
        <>
            <h1>Contact me</h1>
            <Markdown content={explainer} />
            <div className="flex w-full pt-12 justify-center">
                <FeedbackForm />
            </div>
        </>
    );
}