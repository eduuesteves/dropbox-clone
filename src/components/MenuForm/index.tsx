import { Container, DropboxLogo, Form, Navigation } from "./styles";

export function MenuForm() {
    function handleToggle() {
        if(window.toggleActiveMenu) window.toggleActiveMenu();
    }

    return (
        <Container>
            <Navigation>
                <h1>
                    <DropboxLogo />
                    <span>Dropbox</span>
                </h1>
                <button 
                    className="action--close"
                    onClick={handleToggle}
                >✕</button>
            </Navigation>
            <Form>
                <span className="title">Registre-se</span>
                <span className="subtitle">Preencha o formulário abaixo</span>

                <input type="text" placeholder="Nome" />
                <input type="text" placeholder="Sobrenome" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Senha" />

                <button>Prosseguir</button>
                <span className="terms">
                    Essa página está sujeita à Política de Privacidade e aos Termos de serviço.
                </span>
            </Form>
        </Container>
    )
}