import { Prisma } from "@prisma/client";
import { Request, Response } from "express";
import LanceServices from "../Services/LanceServices";

class LanceController{

    constructor(){}

    async createUsuario(req: Request, res: Response){
        const dados: Prisma.LanceCreateInput = req.body;
        
        if(dados.comprador !== "" && dados.leilao !== "" && dados.valor !== null){
            const newLance = await LanceServices.createLance(dados)
            res.status(200).json({
                status: 'ok',
                newUsuario: newLance
            });
        }else{
            res.status(400).json({
                status: 'error',
                message: 'Favor inserir os dados no corpo da requisição'
            })
        }

    }

    async listUsuarios(req: Request, res: Response){
        const users = UsuarioService.listUsuarios();

        res.status(200).json({
            status: 'ok',
            users: users
        })
    }

    async updateUsuario(req: Request, res: Response){
        const dados: Prisma.UsuarioCreateInput = req.body;

        if(dados.email !== "" && dados.nome !== ""){
            const updatedUsuario = await UsuarioService.updateUsuario(dados.email, dados)
            res.status(200).json({
                status: 'ok',
                updatedUsuario: updatedUsuario
            });
        }else{
            res.status(400).json({
                status: 'error',
                message: 'Favor inserir os dados no corpo da requisição'
            })
        }
    }

    async deleteUsuario(req: Request, res: Response){
        const usuario = UsuarioService.deleteUsuario = req.body;

        if(usuario.email !== ""){
            const deletedUsuario = await UsuarioService.deleteUsuario(usuario.email)
            res.status(200).json({
                status: 'ok',
                deletedUsuario: deletedUsuario
            });
        }else{
            res.status(400).json({
                status: 'error',
                message: 'Favor inserir os dados corretamente'
            })

        }
    }
}

export default new LanceController();