import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { MasterCountry } from 'src/model/master-country.model';

@ApiTags('Country')
@Controller('master/country')
export class CountryController {
    @Get('/')
    @ApiOperation({ summary: 'Get all countries' })
    @ApiResponse({ status: 200, description: 'Return a list of countries', type: [MasterCountry] }) 
    async findCountryAll(): Promise<MasterCountry[]> {
      return this.appService.getMasterCountry();
    }
}
