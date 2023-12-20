import { EmailTemplate } from '../../components/email-template';
import { CreateEmailOptions } from '../../../../node_modules/resend/build/src/emails/interfaces/create-email-options.interface.d';
import { Resend } from 'resend';
require('dotenv').config();

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  try {
    const data = await resend.emails.send({
      from: 'ember <ember@majed.studio>',
      to: ['maple11303@gmail.com'],
      subject: 'Hello world',
      react: EmailTemplate({ firstName: 'John' }),
    } as CreateEmailOptions);

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
