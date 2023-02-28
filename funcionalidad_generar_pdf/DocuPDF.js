import React from "react";
import {Document, Page, View, Text, StyleSheet} from "@react-pdf/renderer";

const GenerarPDF = ({texto}) => {
    const styles = StyleSheet.create({
        pages: {
            paddingHorizontal: 70,
            paddingVertical: 50,
        },
        sectionTitulos:{
            // marginLeft: 50,
            // marginRight: 50,
            // marginTop: 50,
            marginBottom: 10,
            //padding: 20,
        },
        sectionTexto:{
            marginLeft: 10,
            // marginRight: 50,
            // marginTop: 10,
            marginBottom:15,
            textAlign: "justify"
        },
        sectionProcesos:{
            marginLeft: 20,
            // marginRight: 50,
            // marginTop: 10,
            marginBottom:15,
            textAlign: "justify"
        },
        fases: {
            fontSize: 18, 
            color: "#2D3F59",
        },
        titulos: {
            fontSize: 17,
        },
        subtTitulos: {
            fontSize: 15,
        },
        texto:{
            fontSize: 13,
        },

    });
    return(
        <Document>
            <Page size='A4' style={styles.pages}>
                {/* Seccion Historia */}
                <View style={styles.sectionTitulos} >
                    {/* Encabezado */}
                    <Text style={styles.titulos}>
                        HISTORIA
                    </Text>
                </View>
                <View style={styles.sectionTexto} >
                    {/* Texto (Que viene del imput) */}
                    <Text style={styles.texto} >{texto}</Text>
                </View>
                {/* Seccion Organizacion de la empresa */}
                <View style={styles.sectionTitulos} >
                    {/* Encabezado (Titulo) */}
                    <Text style={styles.titulos}>
                        ORGANIZACION DE LA EMPRESA
                    </Text>
                </View>
                <View style={styles.sectionTexto} >
                    <Text style={styles.texto} >{texto}</Text>
                </View>
                {/* SECCION ORGANIGRAMA */}
                <View style={styles.sectionTitulos} >
                    {/* Encabezado (Titulo) */}
                    <Text style={styles.titulos}>
                        ORGANIGRAMA
                    </Text>
                </View>
                <View style={styles.sectionTexto} >
                    <Text style={styles.texto} >{texto}</Text>
                </View>
                {/* SECCION FUNCIONES DE PUESTOS EN LA EMPRESA*/}
                <View style={styles.sectionTitulos} >
                    {/* Encabezado (Titulo) */}
                    <Text style={styles.titulos}>
                        FUNCIONES DE PUESTOS EN LA EMPRESA
                    </Text>
                </View>
                <View style={styles.sectionTexto} >
                    <Text style={styles.texto} >{texto}</Text>
                </View>
                {/* SECCION ALCANCE*/}
                <View style={styles.sectionTitulos} >
                    {/* Encabezado (Titulo) */}
                    <Text style={styles.titulos}>
                        ALCANCE
                    </Text>
                </View>
                <View style={styles.sectionTexto} >
                    <Text style={styles.texto} >{texto}</Text>
                </View>
                {/* SECCION VOCABULARIO*/}
                <View style={styles.sectionTitulos} >
                    {/* Encabezado (Titulo) */}
                    <Text style={styles.titulos}>
                        VOCABULARIO
                    </Text>
                </View>
                <View style={styles.sectionTexto} >
                    <Text style={styles.texto} >{texto}</Text>
                </View>
                {/* SECCION MISION*/}
                <View style={styles.sectionTitulos} >
                    <Text style={styles.titulos}>
                        MISION
                    </Text>
                </View>
                <View style={styles.sectionTexto} >
                    <Text style={styles.texto} >{texto}</Text>
                </View>
                {/* SECCION VISION*/}
                <View style={styles.sectionTitulos} >
                    <Text style={styles.titulos}>
                        VISION
                    </Text>
                </View>
                <View style={styles.sectionTexto} >
                    <Text style={styles.texto} >{texto}</Text>
                </View>
                {/* SECCION POLITICAS*/}
                <View style={styles.sectionTitulos} >
                    <Text style={styles.titulos}>
                        POLITICAS GENERALES
                    </Text>
                </View>
                <View style={styles.sectionTexto} >
                    <Text style={styles.texto} >{texto}</Text>
                </View>
            </Page>

            {/* NUEVA PAGINA */}
            <Page size='A4' style={styles.pages}>
                <View style={styles.sectionTitulos} >
                    <Text style={styles.fases}>
                        FASE:{texto}
                    </Text>
                </View>
                {/* SECCION PROCESO*/}
                <View style={styles.sectionTitulos} >
                    <Text style={styles.titulos}>
                        NOMBRE DEL PROCESO:{texto} ID:{texto} 
                    </Text>
                </View>
                {/* SECCION Proposito*/}
                <View style={styles.sectionTitulos} >
                    <Text style={styles.subtTitulos}>
                        • Proposito:
                    </Text>
                </View>
                <View style={styles.sectionProcesos} >
                    <Text style={styles.texto}>{texto}</Text>
                </View>
                {/* SECCION Objetivos*/}
                <View style={styles.sectionTitulos} >
                    <Text style={styles.subtTitulos}>
                        • Objetivos:
                    </Text>
                </View>
                <View style={styles.sectionProcesos} >
                    <Text style={styles.texto}>{texto}</Text>
                </View>
                {/* SECCION Identificadores*/}
                <View style={styles.sectionTitulos} >
                    <Text style={styles.subtTitulos}>
                        • Identificadores:
                    </Text>
                </View>
                <View style={styles.sectionProcesos} >
                    <Text style={styles.texto}>{texto}</Text>
                </View>
                {/* SECCION Metricas*/}
                <View style={styles.sectionTitulos} >
                    <Text style={styles.subtTitulos}>
                        • Metricas:
                    </Text>
                </View>
                <View style={styles.sectionProcesos} >
                    <Text style={styles.texto}>{texto}</Text>
                </View>
                {/* SECCION Actividades*/}
                <View style={styles.sectionTitulos} >
                    <Text style={styles.subtTitulos}>
                        • Actividades:
                    </Text>
                </View>
                <View style={styles.sectionProcesos} >
                    <Text style={styles.texto}>{texto}</Text>
                </View>
                {/* SECCION Diagramas*/}
                <View style={styles.sectionTitulos} >
                    <Text style={styles.subtTitulos}>
                        • Diagramas:
                    </Text>
                </View>
                <View style={styles.sectionProcesos} >
                    <Text style={styles.texto}>{texto}</Text>
                </View>
                {/* SECCION Responsable*/}
                <View style={styles.sectionTitulos} >
                    <Text style={styles.subtTitulos}>
                        • Responsable:
                    </Text>
                </View>
                <View style={styles.sectionProcesos} >
                    <Text style={styles.texto}>{texto}</Text>
                </View>
                {/* SECCION Categoria*/}
                <View style={styles.sectionTitulos} >
                    <Text style={styles.subtTitulos}>
                        • Categoria:
                    </Text>
                </View>
                <View style={styles.sectionProcesos} >
                    <Text style={styles.texto}>{texto}</Text>
                </View>
                {/* SECCION Evidencias de entrada*/}
                <View style={styles.sectionTitulos} >
                    <Text style={styles.subtTitulos}>
                        • Evidencias de entrada:
                    </Text>
                </View>
                <View style={styles.sectionProcesos} >
                    <Text style={styles.texto}>{texto}</Text>
                </View>
                {/* SECCION Evidencias de Salida*/}
                <View style={styles.sectionTitulos} >
                    <Text style={styles.subtTitulos}>
                        • Evidencias de salida:
                    </Text>
                </View>
                <View style={styles.sectionProcesos} >
                    <Text style={styles.texto}>{texto}</Text>
                </View>
                    
            </Page>
        </Document>
        
    );
};

export default GenerarPDF;