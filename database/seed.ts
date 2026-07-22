import { PrismaClient, Role, VehicleStatus } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Starting seed...');

  // Create Organization
  const org = await prisma.organization.create({
    data: {
      name: 'Acme Logistics',
    },
  });

  console.log(`Created Organization: ${org.name}`);

  // Create Super Admin
  const admin = await prisma.user.create({
    data: {
      email: 'admin@fleetiq.com',
      passwordHash: 'hashed_password_mock', // In real app, this should be bcrypt hash
      firstName: 'Super',
      lastName: 'Admin',
      role: Role.SUPER_ADMIN,
      organizationId: org.id,
    },
  });

  console.log(`Created Super Admin: ${admin.email}`);

  // Create Driver User
  const driverUser = await prisma.user.create({
    data: {
      email: 'driver1@fleetiq.com',
      passwordHash: 'hashed_password_mock',
      firstName: 'John',
      lastName: 'Doe',
      role: Role.DRIVER,
      organizationId: org.id,
    },
  });

  // Create Driver Profile
  const driver = await prisma.driver.create({
    data: {
      userId: driverUser.id,
      licenseNumber: 'DL-123456789',
      medicalCert: 'MED-98765',
      drivingScore: 92.5,
    },
  });

  console.log(`Created Driver: ${driverUser.email}`);

  // Create Vehicles
  const vehicle1 = await prisma.vehicle.create({
    data: {
      organizationId: org.id,
      make: 'Ford',
      model: 'Transit',
      year: 2022,
      vin: '1FTBR1EX3MKB12345',
      registration: 'CA-XYZ-123',
      type: 'Van',
      status: VehicleStatus.ACTIVE,
      currentMileage: 15400,
      engineNumber: 'ENG-4567',
    },
  });

  const vehicle2 = await prisma.vehicle.create({
    data: {
      organizationId: org.id,
      make: 'Mercedes-Benz',
      model: 'Sprinter',
      year: 2023,
      vin: 'WDFPF4CD2LN123456',
      registration: 'NY-ABC-789',
      type: 'Van',
      status: VehicleStatus.MAINTENANCE,
      currentMileage: 8200,
    },
  });

  console.log('Created Vehicles');

  // Create Trip
  const trip = await prisma.trip.create({
    data: {
      organizationId: org.id,
      vehicleId: vehicle1.id,
      driverId: driver.id,
      startLocation: 'Warehouse A',
      endLocation: 'Customer B',
      distance: 45.5,
      status: 'COMPLETED',
    },
  });

  console.log('Created Trip');

  // Create Maintenance Log
  const maintenance = await prisma.maintenance.create({
    data: {
      vehicleId: vehicle2.id,
      description: 'Scheduled Oil Change and Brake Inspection',
      cost: 450.0,
      date: new Date(),
      status: 'IN_PROGRESS',
    },
  });

  console.log('Created Maintenance Log');

  console.log('Seed completed successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
