import useLoginModal from '@/hooks/useLoginModal';
import Input from '../Input';
import { useCallback, useState } from 'react';
import Modal from '../Modal';
import useRegisterModal from '@/hooks/useRegisterModal';
import axios from 'axios';
import { signIn } from 'next-auth/react';
import { toast } from 'react-hot-toast';
type Props = {};

function RegisterModal({}: Props) {
  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = useCallback(async () => {
    try {
      setIsLoading(true);
      await axios.post('/api/register', { email, password, username, name });
      toast.success('Account created');
      signIn('credentials', { email, password });
      registerModal.onClose();
      //
    } catch (error) {
      console.log(error);
      toast.error('Something went wrong');
    } finally {
      setIsLoading(false);
    }
  }, [email, name, password, registerModal, username]);

  const onToggle = useCallback(() => {
    if (isLoading) return;
    loginModal.onOpen();
    registerModal.onClose();
  }, [isLoading, loginModal, registerModal]);

  const bodyContent = (
    <div className='flex flex-col gap-4'>
      <Input
        placeholder='Email'
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        disabled={isLoading}
        type='email'
      />
      <Input
        placeholder='Name'
        onChange={(e) => setName(e.target.value)}
        value={name}
        disabled={isLoading}
        type='text'
      />
      <Input
        placeholder='Username'
        onChange={(e) => setUsername(e.target.value)}
        value={username}
        disabled={isLoading}
        type='text'
      />
      <Input
        placeholder='Password'
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        disabled={isLoading}
        type='password'
      />
    </div>
  );

  const footerContent = (
    <div className='text-neutral-400 text-center mt-4'>
      <p>
        Already have an account?{' '}
        <span onClick={onToggle} className='text-white cursor-pointer hover:underline'>
          {' '}
          Sign in
        </span>
      </p>
    </div>
  );
  return (
    <Modal
      disabled={isLoading}
      isOpen={registerModal.isOpen}
      title='Create an account'
      actionLabel='Register'
      onClose={registerModal.onClose}
      onSubmit={onSubmit}
      body={bodyContent}
      footer={footerContent}
    />
  );
}

export default RegisterModal;
