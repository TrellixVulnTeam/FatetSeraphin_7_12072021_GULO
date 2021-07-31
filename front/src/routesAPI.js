
module.exports = { 
    methods: {
        
        urlAPI() { return "http://localhost:3000/api" },


        // ========== GET ==========
        async read_Base(url) {
            
            return await fetch(url)
            .then(response => response.json())
            .then(data => { return data });
        },


        // ========== POST / PUT ==========
        async write_Base(url, data, method) {
            
            const response = await fetch(url, {
                headers: {"Content-Type": "application/json; charset=UTF-8"},
                credentials: "include",
                method: method,
                body: JSON.stringify(data)
            });
            
            try { return await response.json() }
            catch(error) { console.log("error", error) }
            return {}
        },


        // ========== DELETE ==========
        async delete_Base(url) {
            
            return await fetch(url, {
                headers: {"Content-Type": "application/json; charset=UTF-8"},
                credentials: "include",
                method: "DELETE"
            });
        },


        // ========== DELETE ==========
        async delete_Base_WithID(url, postId) {
            
            const response = await fetch(url, {
                headers: {"Content-Type": "application/json; charset=UTF-8"},
                credentials: "include",
                method: "DELETE",
                body: JSON.stringify(postId)
            });
            
            try { return await response.json() }
            catch(error) { console.log("error", error) }
            return {}
        },

        
        // ==================================================================================
        // ==> USER
        // ==================================================================================
        async logoutUser_API() { this.write_Base(`${this.urlAPI()}/auth/logout`, {}, "POST") },
        
        // ----------------------------------------------------------------------------------
        async wallUser_API() { return await this.read_Base(`${this.urlAPI()}/auth/wall`) },
        
        // ----------------------------------------------------------------------------------
        async profileUser_API() { return await this.read_Base(`${this.urlAPI()}/auth/profile`) },
        
        // ----------------------------------------------------------------------------------
        async updateUser_API(formData) { this.write_Base(`${this.urlAPI()}/auth/updateUser`, formData, "PUT") },
        
        // ----------------------------------------------------------------------------------
        async updateUserEmail_API(formData) { this.write_Base(`${this.urlAPI()}/auth/updateUser/email`, formData, "PUT") },
        
        // ----------------------------------------------------------------------------------
        async updateUserPsw_API(formData) { this.write_Base(`${this.urlAPI()}/auth/updateUser/password`, formData, "PUT") },
        
        // ----------------------------------------------------------------------------------
        async deleteUser_API() { this.delete_Base(`${this.urlAPI()}/auth/delete`) },
        
        // ----------------------------------------------------------------------------------


        // ==================================================================================
        //  ==> PUBLISH
        // ==================================================================================
        async getAllPublish_API() { return await this.read_Base(`${this.urlAPI()}/publish`) },
        // ----------------------------------------------------------------------------------

        async createPublish_API(formData) { this.write_Base(`${this.urlAPI()}/publish/create`, formData, "POST") },
        // ----------------------------------------------------------------------------------

        async modifyPublish_API(formData) {
        this.write_Base(`${this.urlAPI()}/publish/modify`, formData, "PUT") }, // publishId
        // ----------------------------------------------------------------------------------

        async deletePublish_API(postId) {
        this.delete_Base_WithID(`${this.urlAPI()}/publish/delete`, postId) }, // publishId
        // ----------------------------------------------------------------------------------



        // ==================================================================================
        //  ==> COMMENT
        // ==================================================================================
        async getAllComment_API(formData) {
            this.write_Base(`${this.urlAPI()}/comment`, formData, "POST") }, // publishId
        // ----------------------------------------------------------------------------------

        async createComment_API(formData) { 
        this.write_Base(`${this.urlAPI()}/comment/create`, formData, "POST") }, // publishId
        // ----------------------------------------------------------------------------------
        
        async modifyComment_API(formData) {
        this.write_Base(`${this.urlAPI()}/comment/modify`, formData, "PUT") }, // commentId
        // ----------------------------------------------------------------------------------

        async deleteComment_API(postId) {
        this.delete_Base_WithID(`${this.urlAPI()}/comment/delete`, postId) }, // commentId
        // ----------------------------------------------------------------------------------
    }
}