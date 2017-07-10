function LaadPagina (PagN) {
	var LoginI = JSON.parse(localStorage.getItem('LoginI'));
	PageContent = $(LoginI.Htmlpag[PagN]);
     $("#Wrapper").replaceWith(PageContent);
}