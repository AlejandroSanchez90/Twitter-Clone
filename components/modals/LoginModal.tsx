import useLoginModal from '@/hooks/useLoginModal';
import Input from '../Input';
import { useCallback, useState } from 'react';
import Modal from '../Modal';
import useRegisterModal from '@/hooks/useRegisterModal';

type Props = {};

function LoginModal({}: Props) {
  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = useCallback(async () => {
    try {
      setIsLoading(true);
      // TODO: Add login

      loginModal.onClose();
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, [loginModal]);

  const onToggle = useCallback(() => {
    if (isLoading) return;
    loginModal.onClose();
    registerModal.onOpen();
  }, [isLoading, loginModal, registerModal]);

  const bodyContent = (
    <div className='flex flex-col gap-4'>
      <Input
        placeholder='Email'
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        disabled={isLoading}
      />
      <Input
        placeholder='Password'
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        disabled={isLoading}
      />
    </div>
  );

  const footerContent = (
    <div className='text-neutral-400 text-center mt-4'>
      <p>
        First time using Twitter?{' '}
        <span onClick={onToggle} className='text-white cursor-pointer hover:underline'>
          {' '}
          Create an account
        </span>
      </p>
    </div>
  );
  return (
    <Modal
      disabled={isLoading}
      isOpen={loginModal.isOpen}
      title='Login'
      actionLabel='Sign in'
      onClose={loginModal.onClose}
      onSubmit={onSubmit}
      body={bodyContent}
      footer={footerContent}
    />
  );
}

export default LoginModal;
