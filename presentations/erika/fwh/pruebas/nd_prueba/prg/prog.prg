/* Classe1
    Esto es uma de prueb a
*/
#include 'hbclass.ch'

CREATE CLASS Classe1

    EXPORTED:
        METHOD New(cVar) CONSTRUCTOR
    PROTECTED:

ENDCLASS

// Group EXPORTED METHODS

/*  METHOD: New(cVar)
        Constructor. el método que lo crea
    Parametros:
        cVar - Este é o primero parametro
Devuelve:
    self
*/
METHOD New(cVar) CLASS Classe1
Return (self)
/* METHOD: otro( )
    ESTO es otro metodo

    Parametros:     

Devuelve:
    logico
*/
METHOD otro() CLASS Classe1

Return (lok)


//Group PROTECTED METHODS