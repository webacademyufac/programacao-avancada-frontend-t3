const Favorite = require('../models/Favorite')

const router = require('express').Router()

router.post('/', async (req, res) => {

    const { name, url } = req.body

    if(!name){
        res.status(422).json({error: 'Nome do favorito é obrigatório!'})
        return
    }

    const favorite = {
        name, 
        url
    }

    try {

        await Favorite.create(favorite)

        res.status(201).json({message: 'Favorite adicionado com sucesso!'})

    }catch (error) {
        res.status(500).json({error: error})
    }

})

router.get('/', async (req, res) => {

    try {
        const urls = await Favorite.find()
        res.status(200).json({urls})
    } catch (error) {
        res.status(500).json({error: error})
    }
})

router.get('/:id', async (req, res) => {
    const id = req.params.id
    
    try {
        const urls = await Favorite.findOne({ _id: id })

        if(!urls) {
            res.status(404).json({message: 'Favorito não encontrado'})
            return
        }

        res.status(200).json({urls})
    } catch (error) {
        res.status(500).json({error: error})
    }
   
})

router.patch('/:id', async (req, res) => {
    const id = req.params.id
    const { name, url } = req.body

    const favorite = {
        name, 
        url
    }

    try {
        
        const updateFavorite = await Favorite.updateOne({ _id:id}, favorite)

        if(updateFavorite.matchedCount === 0){
            res.status(404).json({message: 'Favorito não encontrado'})
        }

        res.status(200).json(favorite)

    } catch (error) {
        res.status(500).json({error: error})
    }

})

router.delete('/:id', async (req, res) => {
    const id = req.params.id
    const favorite = await Favorite.findOne({ _id:id })

    if(!favorite) {
        res.status(422).json({ message: 'Favorite não encontrado' })
        return
    }

    try {
        await Favorite.deleteOne({_id: id})
        res.status(200).json({ message: 'Favorite removido com sucesso!' })
    } catch (error) {
        res.status(500).json({error: error})
    }
})

module.exports = router