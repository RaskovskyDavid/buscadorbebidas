import { Button, Form, Row, Col, Alert } from 'react-bootstrap'

export default function Formulario() {
  return (
    <Form>
        <Row>
            <Col md={6}>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor='nombre'>Nombre Bebida</Form.Label>
                    <Form.Control 
                            id="nombre"
                            type="text"
                            placeholder="Ej: Tequila, Vodka, etc"
                            name="nombre"
                            // value={busqueda.nombre}
                            // onChange={e => setBusqueda({
                            //     ...busqueda,
                            //     [e.target.name] : e.target.value
                            // })}
                        />
                </Form.Group>
            </Col> 
            <Col md={6}>
                <Form.Group className="mb-3">
                <Form.Label htmlFor='categoria'>Categoría Bebida</Form.Label>

                <Form.Select
                    id="categoria"
                    name="categoria"
                    // value={busqueda.categoria}
                    // onChange={e => setBusqueda({
                    //     ...busqueda,
                    //     [e.target.name] : e.target.value
                    // })}
                >
                    <option>- Selecciona Categoria -</option>
                    {/* {categorias.map(categoria => (
                        <option
                            key={categoria.strCategory}
                            value={categoria.strCategory}
                        >{categoria.strCategory}
                        </option>
                    ))} */}
                </Form.Select>
                </Form.Group>
            </Col>
        </Row>
    </Form>
  )
}
