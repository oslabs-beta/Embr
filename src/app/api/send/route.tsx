//src/app/api/send/route.tsx
import { EmailTemplate } from '../../components/email-template';
import { CreateEmailOptions } from '../../../../node_modules/resend/build/src/emails/interfaces/create-email-options.interface.d';
import { Resend } from 'resend';
import 'dotenv/config';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: any) {
  try {
    const body = await request.json();
    console.log('Body from route.tsx: ', body);
    const { name, email } = body;
    const data = await resend.emails.send({
      from: 'embr <ember@majed.studio>',
      to: [`${email}`],
      subject: 'Hello',
      react: <EmailTemplate Name={name} />,
    } as CreateEmailOptions);

    if (data.status === 'success') {
      return Response.json({ message: 'Email Successfully Sent!' });
    }

    return Response.json(data);
  } catch (error) {
    console.log('error: ', error);
    return Response.json({ error });
  }
}
