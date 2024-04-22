import '../../style/Subscribe/style.css'
import '../../style/global.css'

function Subscribe(){
    return(
        <main class="subscribe d-flex justify-content-center align-items-center">
            <section class="container">
                <div class="row py-2 px-0 mx-1 justify-content-center bg-black rounded py-sm-3 py-md-4 py-lg-5">
                    <div class="row title-row">
                        <div class="col">
                            <h3>Criar uma conta</h3>
                        </div>
                    </div>
                    <div class="row name-row">
                        <div class="col-12">
                            <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Nome</label>
                            <input type="first name" class="form-control" id="exampleFormControlInput1"/>
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Sobrenome</label>
                            <input type="last name" class="form-control" id="exampleFormControlInput10"/>
                            </div>
                        </div>
                    </div>
                    <div class="row email-row">
                        <div class="col">
                            <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1"/>
                            </div>
                        </div>
                    </div>
                    <div class="row password-row gap-3">
                        <div class="col-12">
                            <label for="inputPassword5" class="form-label">Password</label>
                            <input type="password" id="inputPassword5" class="form-control" aria-describedby="passwordHelpBlock"/>
                        </div>
                        <div class="col-12">
                            <label for="inputPassword5" class="form-label">Password</label>
                            <input type="password" id="inputPassword5" class="form-control" aria-describedby="passwordHelpBlock"/>
                        </div>
                    </div>
                    <div class="row pt-4">
                        <div class="col-12 d-grid p-sm-4">
                            <button class="btn btn-primary rounded">
                                Criar
                            </button>
                        </div>
                        <div class="col-12 pt-2 pb-2 align-self-center text-center">
                            <p class="mb-0 p-0">Já tem uma conta?<a href="#">Faça Login</a></p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Subscribe;
