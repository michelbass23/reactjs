import illustrationImg from '../../assets/illustration.svg';
import logoImg from '../../assets/logo.svg';
import googleIconImg from '../../assets/google-icon.svg';
export function Home(){

    return (
       <div>
            <aside>
            <img src={illustrationImg} alt="illustrationImg"/>
           <strong>Crie salas ao vivo</strong>
            <p>Tire as  duvidas da sua audiência em tempo real.</p>
        </aside>
    <main>
        <div>
         <img src={logoImg} alt="LetmeAsk" />
        <button>
            <img src={googleIconImg} alt="logo com o google" />
            Crie sua sala com o Google
        </button>
        <div>ou entre em uma sala</div>
            <form>
                <input
                type="text"
                placeholder='Digite o código da sala'
                 />
                 <button type='submit'>
                    Entrar na sala
                 </button>
            </form>
        </div>



    </main>
       </div>
    )

}